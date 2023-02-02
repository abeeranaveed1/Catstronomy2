import { StyleSheet, Text, View, ImageBackground,Dimensions, Image } from 'react-native'
import React from 'react'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styling from '../CustomProperties/Theme2';
import { useState } from 'react';
import {RadioButton } from 'react-native-paper';
import {firebase} from '../../config'

const {width} = Dimensions.get('screen');

const CreateProfile = ({navigation}) => {
  const [catName, setCatName] = useState('');
    const [catBreed, setCatBreed] = useState('');
    const [catAgeYears, setCatAgeYears] = useState('');
    const [catAgeMonths, setCatAgeMonths] = useState('');
    const [catWeight, setCatWeight] = useState('');
    const [catGender, setCatGender] = useState('');
    const [catColor, setCatColor] = useState('');
    const [catState, setCatState] = useState('');
    const [catNature, setCatNature] = useState('');

    const handleSave = async () => {
      // Get the current user
      const user = firebase.auth().currentUser;
      // Create a reference to the user's collection
      const collectionRef = firebase.firestore().collection(`users/${user.uid}/cats`);
      // Add a new document to the collection with the data from the useState hooks
      await collectionRef.add({
        catName: catName,
        catBreed: catBreed,
        catAgeYears: catAgeYears,
        catAgeMonths: catAgeMonths,
        catWeight: catWeight,
        catGender: catGender,
        catColor: catColor,
        catState: catState,
        catNature: catNature
      });
      alert("Cat Profile Created!")
      console.log('Created Entry Successfully');
      // Clear the form's input fields
      setCatName('');
      setCatBreed('');
      setCatAgeYears('');
      setCatAgeMonths('');
      setCatWeight('');
      setCatGender('');
      setCatColor('');
      setCatState('');
      setCatNature('');
    }
    
    const Discard = () =>{
      setCatName('');
      setCatBreed('');
      setCatAgeYears('');
      setCatAgeMonths('');
      setCatWeight('');
      setCatGender('');
      setCatColor('');
      setCatState('');
      setCatNature('');
console.log("Discarded")
    } 
    
    
    


  
  return (
    <View style={{backgroundColor:'pink',height:hp(85), width:wp(100)}}>
      <ImageBackground source={require('../images/background.png')} style={{width:'100%',height:hp(100), overflow:'hidden', opacity:.75, alignItems:'center', backgroundColor:'orange',marginTop:'-20%'}}>
      <TouchableOpacity
     
      style={[styles.circle, { width: width/2, height: width/2, borderRadius: width/4, marginTop:'21%' }]}>

        </TouchableOpacity>
        
        <View style={{marginTop:10,width:wp(95), height:hp(47), backgroundColor:'white', alignSelf:'center', alignItems:'center', justifyContent:'space-evenly',
      borderTopLeftRadius:25, borderTopRightRadius:25,borderBottomLeftRadius:25, borderBottomRightRadius:25,
      shadowOffset: {width: -40, height: 1},  
      shadowColor: '#ff0026',  
      shadowOpacity: 0.1,  
      shadowRadius: 1, elevation: 15}}>
          <View style={{width:wp(90), height:hp(10), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
<View style={{height:hp(10), backgroundColor:'white', width:wp(30), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20, alignItems:'center'}}>
  <Styling title="Full Name" style={{color:'purple', marginTop:5}}/>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(20), textAlign:'center'}}
  value={catName}
  onChangeText={(catName)=> setCatName(catName)}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(30), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20, alignItems:'center'}}>
  <Styling title="Full Name" style={{color:'purple', marginTop:5}}/>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(20), textAlign:'center'}}
  value={catName}
  onChangeText={(catName)=> setCatName(catName)}/>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(25), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Breed" style={{color:'purple', marginTop:5}}/>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(20),textAlign:'center'}}
  onChangeText={(catBreed)=> setCatBreed(catBreed)}
  value={catBreed}
  />
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(30), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Color" style={{color:'purple', marginTop:5}}/>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(20),textAlign:'center'}}
  onChangeText={(catColor)=> setCatColor(catColor)}
  value={catColor}
  />
</View>
          </View>
          <View style={{width:wp(90), height:hp(10), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Age" style={{color:'purple', marginTop:5}}/>
  <View style={{flexDirection:'row',marginTop:5}}>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5, width:wp(6), textAlign:'center'}}
  keyboardType={'number-pad'}
  value={catAgeYears}
  onChangeText={(catAgeYears)=> setCatAgeYears(catAgeYears)}/>
  <Styling title="Years" style={{color:'purple'}}/>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(6),textAlign:'center'}}
  keyboardType={'number-pad'}
  onChangeText={(catAgeMonths)=> setCatAgeMonths(catAgeMonths)}
  value={catAgeMonths}
  />
  <Styling title="Months" style={{color:'purple'}}/>
  </View>
</View>
<View style={{height:hp(10), backgroundColor:'white', width:wp(40), borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:'center'}}>
  <Styling title="Weight" style={{color:'purple', marginTop:5}}/>
  <View style={{flexDirection:'row'}}>
  <TextInput style={{color:'purple',borderColor:'purple',borderBottomWidth:.5,width:wp(30),textAlign:'center'}}
  onChangeText={(catWeight)=> setCatWeight(catWeight)}
  value={catWeight}
  keyboardType={'numeric'}/>
  <Styling title="Kg" style={{color:'purple'}}/>
  </View>
</View>
          </View>
          <View style={{borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,backgroundColor:'white', width:wp(90), height:hp(10),alignItems:'center', justifyContent:'space-between'}}>
            <Styling title="Gender"  style={{color:'purple',marginTop:5}}/>
            <View style={{ flexDirection: 'row', flex: 0.15, justifyContent: 'space-between', alignItems: 'center',marginTop:'-60%',width:wp(70)}}>
      <View style={{flexDirection:'row', alignItems:'center', height:hp(4), width:wp(30), justifyContent:'space-evenly'}}>
      
     <Styling title="Male" style={{color:'purple',fontSize:16}}/>
      <RadioButton
        value="Male"
        status={ catGender === 'Male' ? 'checked' : 'unchecked' }
        onPress={() => setCatGender('Male')}
        uncheckedColor='purple'
        
      />
      </View>
      <View style={{flexDirection:'row', alignItems:'center', height:hp(4), width:wp(30), justifyContent:'space-evenly'}}>
      <Styling title="Female" style={{color:'purple', fontSize:16}}/>
      <RadioButton
        value="Female"
        status={ catGender === 'Female' ? 'checked' : 'unchecked' }
        onPress={() => setCatGender('Female')}
        uncheckedColor='purple'
      />
      </View>
      </View>
          </View>
          <View style={{borderTopRightRadius:20,borderTopLeftRadius:20,
borderBottomRightRadius:20,borderBottomLeftRadius:20,backgroundColor:'white', width:wp(90), height:hp(10), alignItems:'center', justifyContent:'space-between'}}>
            <Styling title="State" style={{color:'purple',marginTop:5}}/>
            <View style={{ flexDirection: 'row', flex: 0.15, justifyContent: 'space-between', alignItems: 'center', marginTop:'-60%',width:wp(70)}}>
      <View style={{flexDirection:'row', alignItems:'center', height:hp(4), width:wp(30), justifyContent:'space-evenly'}}>
      
     <Styling title="Intact" style={{color:'purple',fontSize:16}}/>
      <RadioButton
        value="Intact"
        status={ catState === 'Intact' ? 'checked' : 'unchecked' }
        onPress={() => setCatState('Intact')}
        uncheckedColor='purple'
        
      />
      </View>
      <View style={{flexDirection:'row', alignItems:'center', height:hp(4), width:wp(30), justifyContent:'space-evenly'}}>
      <Styling title="Neutered" style={{color:'purple', fontSize:16}}/>
      <RadioButton
        value="Neutered"
        status={ catState === 'Neutered' ? 'checked' : 'unchecked' }
        onPress={() => setCatState('Neutered')}
        uncheckedColor='purple'
      />
      </View>
      </View>
          </View>
          
        </View>
        <View style={{opacity:.95,marginTop:10,flexDirection:'row', width:wp(90), justifyContent:'space-between'}}>
      <TouchableOpacity 
      onPress={() => {
        {Discard()};
        navigation.navigate('Cat Profile');
    }}
        style={{backgroundColor:'pink', height:hp(5), 
      width:wp(40),borderRadius:10,
      shadowOffset: {width: -40, height: 1},  
      shadowColor: '#ff0026',  
      shadowOpacity: 0.1,  
      shadowRadius: 1, elevation: 15}}>
        <Styling title="Discard Changes" style={{color: 'purple',textAlign:'center',marginTop:6}}/>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => {
        {handleSave()};
        navigation.navigate('Cat Profile');
    }}
      style={{shadowOffset: {width: -40, height: 1},  
      shadowColor: '#ff0026',  
      shadowOpacity: 0.1,  
      shadowRadius: 1, elevation: 15,backgroundColor:'pink',height:hp(5), width:wp(40), borderRadius:10}}>
        <Styling title="Save Changes" style={{color: 'purple',textAlign:'center', marginTop:6}}/>
      </TouchableOpacity>
      </View>
        </ImageBackground>
    </View>
  )
}

export default CreateProfile

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
    opacity:.5,
  },
})