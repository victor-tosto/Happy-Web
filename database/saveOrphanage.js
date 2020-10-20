function saveOrphanage(db, orphanage) {
    return db.run(`
      INSERT INTO orphanages (
          lat,
          lng,
          name,
          info,
          wpp,
          images,
          instructions,
          visits,
          open_on_weekends
      ) VALUES (
          "${orphanage.lat}",
          "${orphanage.lng}",
          "${orphanage.name}",
          "${orphanage.info}",
          "${orphanage.wpp}",
          "${orphanage.images}",
          "${orphanage.instructions}",
          "${orphanage.visits}",
          "${orphanage.open_on_weekends}"
      );
  `);
  }
  
  module.exports = saveOrphanage;