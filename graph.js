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
        adjancency_list[E[i][0]-1].push([E[i][1]-1,E[i][2]]);     //here E[i] represents the edge of ith element and 0,1 are end points of graph and 2 is the weight of the edge
        adjancency_list[E[i][1]-1].push([E[i][0]-1,E[i][2]]);       // -1 is used here to get 0 based indexing
    }

    return adjancency_list;
}
// here we are writing edges and vertices to check if the graph is working correctly or not
// this will be our initial graph which will be shown on the front page
const V =5;
const edge = [[1,2,3],[1,4,2],[3,5,1],[3,4,3]];

let graph = createGraph(V,edge);
console.log(graph);