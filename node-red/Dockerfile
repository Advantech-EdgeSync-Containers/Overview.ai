# Overview.ai Node-RED Demo
FROM nodered/node-red:latest

USER root

# Install additional nodes for industrial integration
RUN npm install \
    node-red-contrib-modbus \
    node-red-contrib-opcua \
    node-red-contrib-mqtt-broker \
    node-red-contrib-dashboard \
    node-red-contrib-image-tools

# Copy demo flows
COPY flows/ /data/flows/
COPY settings.js /data/settings.js

# Set permissions
RUN chown -R node-red:node-red /data

USER node-red

# Expose port
EXPOSE 1880

# Start Node-RED
CMD ["npm", "start"]
