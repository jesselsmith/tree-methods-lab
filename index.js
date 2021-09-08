function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(root, node){
    if(node.data == root.data){
        return true
    }else if((node.data < root.data) && root.left){
        return findOrAdd(root.left, node)
    }else if(node.data < root.data){
        root.left = node
    }else if(root.right){
        return findOrAdd(root.right, node)
    }else{
        root.right = node
    }
}

function max(root){
    if(root.right){
        return max(root.right)
    }else{
        return root
    }
}

function min(root){
    if(root.left){
        return max(root.left)
    }else{
        return root
    }
}