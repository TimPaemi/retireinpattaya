import os, glob, math
from PIL import Image, ImageDraw, ImageFont

OUT="public/og"; os.makedirs(OUT, exist_ok=True)
W,H=1200,630
PILLARS={
 'healthcare':('Healthcare & Insurance','#f0b429'),'visas':('Visas & Immigration','#e8893b'),
 'money':('Money, Pensions & Tax','#3aa17e'),'cost-of-living':('Cost of Living','#e0a92e'),
 'housing':('Housing','#5a93c2'),'daily-life':('Daily Life & Community','#e87a5d'),
 'safety-scams':('Safety & Scams','#4d8fa6'),'getting-settled':('Getting Settled','#7aa23f'),
 'legal-end-of-life':('Legal & End-of-Life','#b08bbf'),'reality-checks':('Honest Reality Checks','#d98a3a'),
}
def font(p,s):
    try: return ImageFont.truetype(p,s)
    except: return ImageFont.load_default()
SERIF="/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
SANS="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
title_f=font(SERIF,58); eye_f=font(SANS,26); foot_f=font(SANS,22)

def hashnum(s):
    h=0
    for c in s: h=(h*31+ord(c))%100000
    return h

def wrap(draw,text,fnt,maxw):
    words=text.split(); lines=[]; cur=""
    for w in words:
        t=(cur+" "+w).strip()
        if draw.textlength(t,font=fnt)<=maxw: cur=t
        else:
            if cur: lines.append(cur)
            cur=w
    if cur: lines.append(cur)
    return lines[:4]

def render(slug, title, pillar):
    name,sun = PILLARS.get(pillar,('Retire in Pattaya','#f0b429'))
    img=Image.new("RGB",(W,H),"#0e4d64"); d=ImageDraw.Draw(img,"RGBA")
    for y in range(H):
        t=y/H; r=int(14+(20-14)*t); g=int(77+(93-77)*t); b=int(100+(119-100)*t)
        d.line([(0,y),(W,y)],fill=(r,g,b))
    hn=hashnum(slug)
    sx=820+(hn%280); sy=70+((hn>>3)%80)
    # sun (pillar tinted)
    sc=tuple(int(sun[i:i+2],16) for i in (1,3,5))
    d.ellipse([sx-95,sy-95,sx+95,sy+95],fill=sc+(40,))
    d.ellipse([sx-58,sy-58,sx+58,sy+58],fill=sc+(235,))
    # waves
    def wave(yc,col,amp,ph):
        pts=[]
        for x in range(0,W+10,12): pts.append((x,yc+int(amp*math.sin(x/130.0+ph))))
        pts+=[(W,H),(0,H)]; d.polygon(pts,fill=col)
    wave(486,(42,157,143,55),12,(hn%6)); wave(528,(27,127,140,90),15,(hn%4)); wave(572,(10,60,82,150),18,(hn%5))
    # eyebrow
    d.text((80,118),name.upper(),font=eye_f,fill=(191,227,232,255))
    d.line([(80,158),(80+d.textlength(name.upper(),font=eye_f),158)],fill=(sc+(220,)),width=3)
    # title (wrapped)
    lines=wrap(d,title,title_f,1000); y=185
    for ln in lines:
        d.text((80,y),ln,font=title_f,fill=(255,255,255,255)); y+=70
    # footer
    d.text((80,560),"RETIRE IN PATTAYA  ·  retireinpattaya.com",font=foot_f,fill=(191,227,232,255))
    img.save(os.path.join(OUT,slug+".png"),"PNG")

def frontmatter(path):
    s=open(path,encoding="utf-8").read()
    parts=s.split("---")
    fm=parts[1] if len(parts)>2 else ""
    title=pillar=None
    for line in fm.splitlines():
        line=line.strip()
        if line.startswith("title:") and title is None: title=line.split(":",1)[1].strip().strip('"')
        elif line.startswith("pillar:") and pillar is None: pillar=line.split(":",1)[1].strip().strip('"')
    return title,pillar

n=0
for f in glob.glob("src/content/guides/*.md")+glob.glob("src/content/guides/*.mdx"):
    slug=os.path.basename(f).rsplit(".",1)[0]
    title,pillar=frontmatter(f)
    if title and pillar: render(slug,title,pillar); n+=1
for f in glob.glob("src/content/pillars/*.md"):
    slug=os.path.basename(f)[:-3]
    title,_=frontmatter(f)
    render("pillar-"+slug,title or PILLARS.get(slug,('',))[0],slug); n+=1
print("generated",n,"OG images")
