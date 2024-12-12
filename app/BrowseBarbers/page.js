import Catalog from '../components/Catalog';

const baberCatalog = () => {
  return (
    <div>
      <div className="h-fit w-full">
        <div className="bg-orange-500 text-center">
          Browse Barbers
        </div>
      </div>
      <div className="flex flex-col gap-8 pt-6">        
        <Catalog 
          name="Amy"
          location="Boston, MA"
          title="TITLE"
          services="SERVICES: BRAIDER, STYLER, BEAUTICIAN"
          rating="Current Rating: 4/5"
          price="Avg Pricing: $150"
        />
        <Catalog 
          name="John"
          location="Houston, TX"
          title="TITLE"
          services="SERVICES: BRAIDER, STYLER, BEAUTICIAN"
          rating="Current Rating: 4/5"
          price="Avg Pricing: $130"
        />
        <Catalog 
          name="Roger"
          location="Wichita, KS"
          title="TITLE"
          services="SERVICES: BRAIDER, STYLER, BEAUTICIAN"
          rating="Current Rating: 5/5"
          price="Avg Pricing: $180"
        />

        <Catalog 
          name="Cam"
          location="New York City, NY"
          title="TITLE"
          services="SERVICES: BRAIDER, STYLER, BEAUTICIAN"
          rating="Current Rating: 5/5"
          price="Avg Pricing: $160"
        />

        <Catalog 
          name="Beatrice"
          location="Chicago, IL"
          title="TITLE"
          services="SERVICES: BRAIDER, STYLER, BEAUTICIAN"
          rating="Current Rating: 4/5"
          price="Avg Pricing: $120"
        />

        <Catalog 
          name="Rachel"
          location="Phoenix, AZ"
          title="TITLE"
          services="SERVICES: BRAIDER, STYLER, BEAUTICIAN"
          rating="Current Rating: 4/5"
          price="Avg Pricing: $100"
        />
        
        {/* <Images /> */}
      </div>
    </div>
  )
}

export default baberCatalog