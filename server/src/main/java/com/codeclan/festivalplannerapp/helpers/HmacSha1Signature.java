package com.codeclan.festivalplannerapp.helpers;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.SignatureException;
import java.util.Formatter;

/**
 * Original source: https://gist.github.com/ishikawa/88599/3195bdeecabeb38aa62872ab61877aefa6aef89e
 * <p>
 * The <tt>HmacSha1Signature</tt> shows how to calculate
 * a message authentication code using HMAC-SHA1 algorithm.
 *
 * <pre>
 * % java -version
 * java version "1.6.0_11"
 * % javac HmacSha1Signature.java
 * % java -ea HmacSha1Signature
 * 104152c5bfdca07bc633eebd46199f0255c9f49d
 * </pre>
 */
public class HmacSha1Signature {

    private static final String HMAC_SHA1_ALGORITHM = "HmacSHA1";

    private static String toHexString(byte[] bytes) {
        Formatter formatter = new Formatter();

        for (byte b : bytes) {
            formatter.format("%02x", b);
        }

        return formatter.toString();
    }

    public static String calculateRFC2104HMAC(String data, String key)
            throws SignatureException, NoSuchAlgorithmException, InvalidKeyException {
        SecretKeySpec signingKey = new SecretKeySpec(key.getBytes(), HMAC_SHA1_ALGORITHM);
        Mac mac = Mac.getInstance(HMAC_SHA1_ALGORITHM);
        mac.init(signingKey);
        return toHexString(mac.doFinal(data.getBytes()));
    }

    // this below is the method we can play around with
    public static String getSignedData(String apiKey, String secretKey, String search) throws Exception {
        // this two constants below can change
        String SIZE = "50"; // number of events per request to Edinburgh Festivals API
        String YEAR = "2021";

        String query = "/events?" + search + "&size=" + SIZE + "&year=" + YEAR +"&key=" + apiKey;
        String signature = calculateRFC2104HMAC(query, secretKey);
        return "https://api.edinburghfestivalcity.com" + query + "&signature=" + signature;
    }
}
