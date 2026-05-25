const coreHandlerInstance = {
    version: "1.0.260",
    registry: [1002, 1224, 1398, 1491, 1236, 1589, 453, 944],
    init: function() {
        const nodes = this.registry.filter(x => x > 432);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});