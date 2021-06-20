import { useEffect, useState } from 'react'

function ResourcesShow({ header, resourcesData }) {

  const [ humanResources, setHumanResources ] = useState(null)
  const [ materialResources, setMaterialResources ] = useState(null)

  useEffect(() => {
    console.log('resourcesData: ', resourcesData)
    const humanResources = resourcesData
      .filter((resource) => resource.resource.resourceType === 'Human')
    const materialResources = resourcesData
      .filter((resource) => resource.resource.resourceType === 'Material')

    console.log('humanResources: ', humanResources)
    console.log('materialResources: ', materialResources)

    setHumanResources(humanResources)
    setMaterialResources(materialResources)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {!resourcesData && 'Loading...'}
      <div className="container border bg-light shadow-sm mt-5">
        <div className="row justify-content-center">

          <div className="d-grid gap-2 col-8 mx-auto">
            <h2 className="text-center text-uppercase text-wrap text-success m-3">
              {header}
            </h2>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-4">
                <div className="form-group border m-4 p-3 shadow">

                  <h4>Human resources:</h4>
                  {humanResources && humanResources.map((resource) => (
                    <div key={resource.id}>
                      <label className="col-sm-2 col-form-label">
                        {resource.resource.resourceName}s:
                      </label>
                      <p
                        className=""
                        id={resource.id}
                      >
                        {resource.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-4">
                <div className="form-group border m-4 p-3 shadow">
                  <h4>Material resources:</h4>
                  {materialResources && materialResources.map((resource) => (
                    <div key={resource.id}>
                      <label className="col-sm-2 col-form-label">
                        {resource.resource.resourceName}:
                      </label>
                      <p
                        className=""
                        id={resource.id}
                      >
                        {resource.quantity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesShow