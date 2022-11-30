import streamlit as st
import pandas as pd
# Run using 'streamlit run app.py'

import preprocessor,helper

df=pd.read_csv('athlete_events.csv')
region_df=pd.read_csv('noc_regions.csv')


df=preprocessor.preprocess(df,region_df)

#Title of the Sidebar
st.sidebar.title("Olympics Analysis")

user_menu=st.sidebar.radio(
    'Select An Option',
    ('Medal Tally','Overall Analysis','Country-wise Analysis','Athlete-wise Analysis')
)



if user_menu=='Medal Tally':
    st.sidebar.header("Medal Tally")
    years,country=helper.country_year_list(df)
    selected_year=st.sidebar.selectbox("Select Year",years)
    selected_country=st.sidebar.selectbox("Select Country",country)
    
    medal_tally=helper.medal_tally(df)
    st.dataframe(medal_tally)