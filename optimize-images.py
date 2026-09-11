from PIL import Image
from pathlib import Path
p=Path('site/public/images')
for name in ['hero','paint','interior']:
    im=Image.open(p/f'{name}-source.png').convert('RGB')
    for width in [768,1536]:
        out=im.resize((width,round(im.height*width/im.width)),Image.Resampling.LANCZOS)
        out.save(p/f'{name}-{width}.webp','WEBP',quality=86,method=6)
