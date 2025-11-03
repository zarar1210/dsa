## **Load Balancer**

A **load balancer** distributes incoming network traffic across multiple servers to ensure that no single server is overwhelmed.

It helps improve the **performance**, **scalability**, and **fault tolerance** of an application.
**Examples:** AWS Elastic Load Balancer (ELB), Google Cloud Load Balancer.

### **Key Features of a Load Balancer**

1. **Traffic Distribution:**
   The core function of a load balancer is to distribute traffic across multiple servers. The decision on which backend server should handle a request is based on predefined rules:
   - **Round Robin:** Requests are sent to servers in a fixed, rotating order.
   - **Least Connections:** Requests are directed to the server with the fewest active connections.
   - **Weighted Distribution:** More traffic is sent to more powerful servers based on assigned weights.

2. **Health Checks:**
   A good load balancer continuously monitors the health and responsiveness of backend servers. If a server becomes unresponsive or fails, the load balancer temporarily removes it from the rotation.

3. **Session Persistence:**
   It’s important for all requests from a particular user to be directed to the same server during a session. This is known as **session persistence**.

   Load balancers can use:
   - **IP-based affinity**
   - **Cookie-based tracking**
     to consistently route user requests to the same backend server.

### **Types of Load Balancers**

1. **Layer 4 Load Balancer (Transport Layer)**
2. **Layer 7 Load Balancer (Application Layer)**
