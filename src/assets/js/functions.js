export const  getChildren = (n, skipMe) => {
    let r = [];
    for ( ; n; n = n.nextSibling )
        if ( n.nodeType == 1 && n != skipMe)
            r.push( n );
    return r;
};

export const  getSiblings = (n) => {
    return getChildren(n.parentNode.firstChild, n);
};


