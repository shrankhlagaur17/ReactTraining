import React from 'react';
import Card from '../../../components/cards';

const CardsScreen = () => {
	return (
		<div className={'cardGridContainer'}>
			<Card
				heading={'Affiliate Program'}
				list1={"Are there countries I can't promote in?"}
				list2={'Can you make specific images/creative for my website?'}
				list3={'How does the Xcoins affiliate program work'}
			/>
			<Card
				heading={'Buy & Sell Cyrptocurrencies'}
				list1={'How do I sell a cryptocurrency?'}
				list2={'How do I buy a cryptocurrency?'}
				list3={'What currencies do we accept?'}
				list4={'How does Xcoins lock in your crypto rate?'}
				anchor={'See all articles'}
			/>
			<Card
				heading={'Contact Us'}
				list1={"What are Xcoins' business hours?"}
				list2={'How can I contact Xcoins?'}
			/>
			<Card
				heading={'My Xcoins Account'}
				list1={'What countries does Xcoins service?'}
				list2={'How do I reset my password?'}
				list3={"What can't I access my brand new account?"}
			/>
			<Card
				heading={'Orders'}
				list1={'How can I upgrade my limit level?'}
				list2={'What is my limit level?'}
				list3={'Why did I receive a different amount of Bitcoin than I initially purchased?'}
				list4={'Are there fees when buying or selling with Xcoins?'}
				anchor={'See all articles'}
			/>
			<Card
				heading={'Payment Methods'}
				list1={'Do you accept Paypal or bank transfer payments?'}
				list2={'What cards can I use on Xcoins to buy or receive cash?'}
				list3={'Can you give me an overview of bank fees? - Cash advance & exchange rate fees'}
				list4={"Why didn't my 3-D Authentication work? And what can I do about it?"}
				anchor={'See all articles'}
			/>
			<Card
				heading={'Security'}
				list1={'What is 3-D Secure?'}
				list2={'What is 2FA - Two Factor Authentication?'}
				list3={'What is OTP(One-time password)?'}
				list4={'How can I protect myself from scams?'}
				anchor={'See all articles'}
			/>
			<Card
				heading={'Verification'}
				list1={'What do I do once my ID verification documents are submitted?'}
				list2={'How can I takethe perfect selfie for verification?'}
				list3={'What ID can I use to sign up with Xcoins?'}
				list4={'Why was my application to join Xcoins declined?'}
				anchor={'See all articles'}
			/>
			<Card
				heading={'Wallet'}
				list1={'What is a private key?'}
				list2={'What is a non-custodial wallet and how does it work?'}
				list3={'What ID can I use to sign up with Xcoins?'}
				list4={'Why was my application to join Xcoins declined?'}
				anchor={'See all articles'}
			/>
		</div>
	);
};

export default CardsScreen;
