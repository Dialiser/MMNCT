import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
 

const FooterComponent = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image
          source={require("./../assets/images/102.png")}   
          style={styles.logo}
        />
        <View style={styles.divider} />
        <Image
          source={require("./../assets/images/105.png")} 
          style={styles.logo}
        />
      </View>

      
      <Text style={styles.tournamentTitle}>
        Manoj Memorial Night Cricket Tournament
      </Text>
      <Text style={styles.subtitle}>
        Sardar Vallabhbhai National Institute of Technology, Surat
      </Text>

      {/* Navigation Links */}
      <View style={styles.navLinks}>
        <View style={styles.navColumn}>
          <Text style={styles.navLink}>Home</Text>
          <Text style={styles.navLink}>Polls</Text>
          <Text style={styles.navLink}>Memories</Text>
          <Text style={styles.navLink}>Sponsors</Text>
        </View>
        <View style={styles.navColumn}>
          <Text style={styles.navLink}>Fixtures</Text>
          <Text style={styles.navLink}>Stars</Text>
          <Text style={styles.navLink}>Trivia</Text>
          <Text style={styles.navLink}>FAQs</Text>
        </View>
        <View style={styles.navColumn}>
          <Text style={styles.navLink}>Point Table</Text>
          <Text style={styles.navLink}>Notice</Text>
          <Text style={styles.navLink}>Organisers</Text>
        </View>
      </View>

      {/* Social Media Links */}
      <Text style={styles.followText}>Follow us on</Text>
      <View style={styles.socialIcons}>
        {/* <TouchableOpacity>
          <Icon name="instagram" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="facebook" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="youtube-play" size={30} color="#fff" style={styles.icon} />
        </TouchableOpacity> */}
      </View>

      {/* Footer Note */}
      <Text style={styles.footerNote}>
        © All the Rights are Reserved with MMNCT
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3D1F6F",
    alignItems: "center",
    paddingVertical: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  divider: {
    width: 1,
    height: 80,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  tournamentTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  navLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  navColumn: {
    alignItems: "center",
  },
  navLink: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
  },
  followText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  footerNote: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});

export default FooterComponent;
