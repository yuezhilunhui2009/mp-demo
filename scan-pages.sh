#! /bin/bash
# 扫描的路径
SCAN_PATH='./pages'

find $SCAN_PATH | grep .js$ | while read -r line
do
    str=${line%%.js}
    echo \"${str#*./}\",
done