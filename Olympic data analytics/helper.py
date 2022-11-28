import numpy as np


#This function will return the medal tally
def medal_tally(df):
    #As already mentioned, that there will be cases where if a particular team has won a hockey game, then all the eleven players will be shown with a medal.
    medal_tally=df.drop_duplicates(subset=['Team','NOC','Games','Year','City','Sport','Event','Medal'])
    
    #total number of gold,silver and bronze medals by a particular region and then sorting the rows on the basis of increasing number of gold medals. 
    medal_tally=medal_tally.groupby('NOC').sum()[['Gold','Silver','Bronze']].sort_values('Gold',ascending=False).reset_index()
    
    #total is equal to gold , silver and bronze combined.
    medal_tally['Total']=medal_tally['Gold']+medal_tally['Silver']+medal_tally['Bronze']
    
    medal_tally['Total']=medal_tally['Total'].astype(int)
    medal_tally['Gold']=medal_tally['Gold'].astype(int)
    medal_tally['Silver']=medal_tally['Silver'].astype(int)
    medal_tally['Bronze']=medal_tally['Bronze'].astype(int)
    
    
    
    return medal_tally



def country_year_list(df):
    years=sorted(df['Year'].unique().tolist())
    years.insert(0,'Overall')
    country=np.unique(df['region'].dropna().values).tolist()
    country=sorted(country)
    country.insert(0,'Overall')
    
    return years,country
    
    