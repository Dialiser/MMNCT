import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import FooterComponent from "./FooterComponent";
import Satyam from "./Satyam";
import MensTeams from "@/Team/TeamMen";
import MatchFrame from './../app/auth/MatchFrame';
import { router } from "expo-router";
import Sponesher from "@/Team/Sponesher";

export default function MainFram() {
  return (
    <View>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.mainImage}
            source={require("./../assets/images/2.png")} // Replace with the correct path to the uploaded image
          />

          <View style={styles.navLinks}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => router.push('/')}
            >
              <Text style={styles.navText}>Fixture</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navButton}
              onPress={() => router.push('/auth/Point Table')}
            >
              <Text style={styles.navText}>Point Table</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navButton}
              onPress={() =>router.push('/auth/Memory')  }
            >
              <Text style={styles.navText}>Memories</Text>
            </TouchableOpacity>
          </View>
        </View>
         
        <View style={styles.mainContent}>
          <Text style={styles.title}>MMNCT</Text>
          <Text style={styles.subtitle}>
            Manoj Memorial Night Cricket Tournament
          </Text>
          <Text style={styles.edition}>18th EDITION</Text>
          <Text style={styles.comingSoon}>coming soon...</Text>
          <Text style={styles.message}>
            Bring back the Cheers! Bring back the Slogans!
          </Text>
        </View>

        <View style={styles.groundContainer}>
          <Image
            style={styles.groundImage}
            source={require("./../assets/images/1.png")}
          />
          <Text style={styles.location}>SAC Ground SVNIT</Text>
        </View>

         <MatchFrame/>
        <MensTeams />
        <Image
          style={styles.cricketPlayerImagee}
          source={require("./../assets/images/102.png")}
        />

        <View style={styles.container}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.titlee}>
              <Text style={styles.bold}>
                Manoj Memorial Night Cricket Tournament
              </Text>
              , popularly known as <Text style={styles.bold}>MMNCT</Text>, is a
              day-night cricket tournament organized by SVNIT, Surat. It began
              in 2006 in memory of the late{" "}
              <Text style={styles.bold}>Shri Manoj Kumar</Text>, an electrical
              engineering student of the institute who unfortunately passed away
              due to dengue fever. He was a cricket aficionado and loved the
              game to his death.
            </Text>
            <Text style={styles.subtitlee}>
              <Text style={styles.bold}>
                Though we lost a braveheart, through this event, we keep the
                passion and spirit of fighting alive among us.
              </Text>
            </Text>

            <Text style={styles.description}>
              Dates of <Text style={styles.bold}>18th edition</Text> of the
              tournament will be announced soon.
            </Text>
            <Text style={styles.description}>
              The teams will comprise of B.Tech, M.Sc., M.Tech, Ph.D. students,
              localites, mess staff, and Faculty members.
            </Text>
            <Text style={styles.description}>
              The tournament features 15 men's and 5 women's teams competing
              against each other to claim the ultimate title in their category.
            </Text>
          </View>

          <View style={styles.containere}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.imageee}
                source={require("./../assets/images/103.png")} // Replace with the actual image path
              />
              <View style={styles.textOverlay}>
                <Text style={styles.overlayText}>Hey! 👋</Text>
                <Text style={styles.overlaySubtitle}>
                  We have something exciting coming up for you, and it is
                  called...
                </Text>
                <View style={styles.buttonc}>
                  <Text style={styles.buttonTextc}>CLICK-A-SENSATION</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.buttonce}>
              <Text style={styles.buttonTextc}>See Winners</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Satyam />
        <Sponesher/>
        <FooterComponent />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navLinks: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    gap: 5,
    marginLeft: 15, // Space between the items (for RN 0.71+)
  },
  navButton: {
    backgroundColor: "#F4A261",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  navText: {
    fontSize: 12,
    color: "#FFF",
  },
  mainImage: {
    width: 100,
    marginTop: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: -15,
  },
  mainContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#FFA500",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 19,
    color: "red",
    marginBottom: 5,
    textAlign: "center",
  },
  edition: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFA500",
    marginBottom: 20,
  },

  location: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  comingSoon: {
    fontSize: 20,
    color: "#333",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  groundContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  groundImage: {
    width: 300,
    height: 150,
  },
  groundImagee: {
    width: 400,
    height: 190,
    marginLeft: 7,
  },
  cricketPlayerImagee: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginVertical: 20,
  },
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    flex: 1,
  },
  descriptionContainer: {
    marginBottom: 30,
  },
  titlee: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  subtitlee: {
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
    fontStyle: "italic",
  },
  description: {
    fontSize: 15,
    color: "#555",
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  containere: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageWrapper: {
    width: "100%",
    height: 450,
    position: "relative", // Needed to position the text over the image
    borderRadius: 10,
    overflow: "hidden", // To ensure the image and text do not exceed the boundaries
  },
  imageee: {
    width: "100%",
    height: "100%",
  },
  textOverlay: {
    position: "absolute", // Positions the text over the image
    top: "30%", // Adjust to control the vertical position of the text
    left: 20,
    right: 20,
    alignItems: "center",
  },
  overlayText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 5,
  },
  overlaySubtitle: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonc: {
    backgroundColor: "#F4A261",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 99,
  },
  buttonTextc: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonce: {
    backgroundColor: "#F4A261",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 99,
    alignItems: "center",
  },
});
