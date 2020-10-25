#!/usr/bin/env python
# -*- coding: utf-8 -*-
import RPi.GPIO as GPIO
import dht11
import time
import datetime

# GPIOの初期設定
GPIO.setwarnings(True)
GPIO.setmode(GPIO.BCM)

# 14ピンをDHT11のシグナル読み取りピンに設定
instance = dht11.DHT11(pin=14)

try:
	while True:
	    result = instance.read()
		#　14ピンから値を正常に取得できたら
	    if result.is_valid():
			#　コンソールに日付と取得した値を出力
	        print("Last valid input: " + str(datetime.datetime.now()))
	        print("Temperature: %-3.1f C" % result.temperature)
	        #print("Humidity: %d %%" % result.humidity)

		#　3sおきのループへ
	    time.sleep(3)

except KeyboardInterrupt:
    print("Cleanup")
    GPIO.cleanup()
