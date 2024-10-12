var inorderTraversal = function(root) {
    let res = []
    function traverse(node){
        if(node === null) return null
        traverse(node.left)
        res.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return res
};