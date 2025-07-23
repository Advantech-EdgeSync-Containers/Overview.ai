# Overview.ai PLC Simulator Demo
FROM python:3.9-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy simulator source
COPY src/ ./src/
COPY config/ ./config/

# Create data directory
RUN mkdir -p /app/data

# Set environment variables
ENV PYTHONPATH="/app/src:$PYTHONPATH"

# Expose ports for different protocols
EXPOSE 44818 502

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD python3 src/health_check.py || exit 1

# Start the PLC simulator
CMD ["python3", "src/simulator.py"]
