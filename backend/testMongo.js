import dns from "dns";

dns.resolveSrv("_mongodb._tcp.cluster0.jdinqfe.mongodb.net", (err, addresses) => {
    if (err) {
        console.log("DNS ERROR:", err);
    } else {
        console.log(addresses);
    }
});