// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i) {
    if (i < arr.length) {
        let temp = new TreeNode(arr[i]);
        root = temp;

        // Insert left child
        root.left = insertLevelOrder(arr, root.left, 2 * i + 1);

        // Insert right child
        root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
    }
    return root;
}

// Function to build tree from array
function buildTree(arr) {
    if (!arr.length) return null;
    return insertLevelOrder(arr, null, 0);
}

// Example usage
let rootList = [1, 2, 2, 3, 4, 4, 3];
let root = buildTree(rootList);

// Now you can use 'root' for testing
console.log(root);

var isSymmetric = function(root) {
    let leftSide = ""
    let rightSide = ""
    function traverse(node, isLeft){
        if(!node) return
        if(isLeft) leftSide = leftSide + String(node.val)
        else{
            rightSide = rightSide + String(node.val)
        }
        traverse(node.left, true)
        traverse(node.right,false)
    }
    traverse(root, false)
    console.log('left', leftSide)
    console.log('right', rightSide)

};
isSymmetric(root)