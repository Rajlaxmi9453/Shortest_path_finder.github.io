function createGraph(V,E)
{
    // V - set of vertices and E - set of edges present in the graph
    // its adjancency list
    let adjancency_list=[];  // we will store the edges and vertices in it
    for(let i=0;i<V;i++)
    {
        adjancency_list.push([]);   // right now we have an empty list for every edge..means graph is not created yet
    }

    for(let i=0;i<E.length;i++)         // now we will fill the adjancency list of the graph with edges
    {
        adjancency_list[E[i][0]].push([E[i][1],E[i][2]]);     //here E[i] represents the edge of ith element and 0,1 are end points of graph and 2 is the weight of the edge
        adjancency_list[E[i][1]].push([E[i][0],E[i][2]]);       // -1 is used here to get 0 based indexing
    }

    return adjancency_list;
}

function dijkstra(graph,V,src){
    let vis = Array(V).fill(0);
    let dist = [];
    for(let i=0;i<V;i++)
    {
        dist.push([10000,-1]);
    }
    dist[src][0]=0;

    for(let i=0;i<V-1;i++)
    {
        let min =-1;
        for(let j=0;j<V;j++)
        {
            if(vis[j]===0){
                if(min===-1 || dist[j][0]<dist[min][0])
                min = j;
            }
        }
        vis[min] = 1;
        for(let j=0;j<graph[min].length;j++){
            let edge = graph[min][j];
            if(vis[edge[0]]===0 && dist[edge[0]][0]>dist[min][0]+edge[1]){
                dist[edge[0]][0] = dist[min][0]+edge[1];
                dist[edge[0]][1] = min;
            }
        }
    }
    return dist;
}

// here we are writing edges and vertices to check if the graph is working correctly or not
// this will be our initial graph which will be shown on the front page
let src = 0;
let V = 9;
let edge = [[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
[6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

let graph = createGraph(V,edge);
let distance = dijkstra(graph,V,0);
console.log(distance);