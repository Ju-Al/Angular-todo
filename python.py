import jsonlines

with jsonlines.open('ref-valid.jsonl', 'r') as jsonl_f:
     lst = [obj for obj in jsonl_f]
for obj in lst:
    print(obj)