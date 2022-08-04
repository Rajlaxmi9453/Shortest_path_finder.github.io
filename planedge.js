let plane =0;
let p1=-1, p2=-1;
for(let pos in data['edges']){
    let edge = data['edges'][pos];
    if(edge['type']===1)
    {
        let to = edge['to']-1;
        let from = edge['from']-1;
        let weight = parseInt(edge['label']);
        if(dist1[to][0]+weight+dist2[from][0]<min_dist)
        {
            plane = weight;
            p1 = to;
            p2 = from;
            min_dist = dist1[to][0] + weight + dist2[from][0];
        }
        if(dist2[to][0] + weight + dist1[from][0] < min_dist)
        {
            plane = weight;
            p2 = to;
            p1 = from;
            min_dist = dist2[to][0] + weight + dist1[from][0];
        }
    }
}