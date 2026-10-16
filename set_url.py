# Dùng: python set_url.py https://TENBAN.github.io/coffeeome
import sys,pathlib
new=sys.argv[1].rstrip('/');old='https://USERNAME.github.io/coffeeome'
for f in pathlib.Path('.').rglob('*'):
    if f.suffix in('.html','.xml','.txt','.md'):
        t=f.read_text(encoding='utf-8');f.write_text(t.replace(old,new),encoding='utf-8')
print('Đã cập nhật URL ->',new)
