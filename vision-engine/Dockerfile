# Overview.ai Vision Engine Demo
FROM nvcr.io/nvidia/l4t-pytorch:r35.2.1-pth2.0-py3

LABEL maintainer="Overview.ai <demo@overview.ai>"
LABEL description="Overview.ai Vision System Demo - Edge AI Processing"

# Install system dependencies
RUN apt-get update && apt-get install -y \
    python3-pip \
    libopencv-dev \
    python3-opencv \
    libgstreamer1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install Python dependencies
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Install TensorRT Python bindings
RUN pip3 install --no-cache-dir tensorrt

# Copy demo application
COPY src/ ./src/
COPY models/ ./models/
COPY config/ ./config/

# Create necessary directories
RUN mkdir -p /app/cache /app/data /app/logs

# Set environment variables
ENV PYTHONPATH="/app/src:$PYTHONPATH"
ENV CUDA_VISIBLE_DEVICES=0
ENV TENSORRT_LOGGER_LEVEL=INFO

# Expose API port
EXPOSE 5001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:5001/health || exit 1

# Start the vision processing service
CMD ["python3", "src/main.py", "--config", "config/demo.json"]
