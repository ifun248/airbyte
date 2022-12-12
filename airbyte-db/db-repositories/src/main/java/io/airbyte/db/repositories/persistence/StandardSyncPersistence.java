/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.db.repositories.persistence;

import io.airbyte.db.repositories.models.StandardSyncModel;
import io.airbyte.db.repositories.repositories.StandardSyncRepository;
import java.util.ArrayList;
import java.util.List;

public class StandardSyncPersistence {

  // private record StandardSyncIdsWithProtocolVersions(
  // UUID standardSyncId,
  // UUID sourceDefId,
  // Version sourceProtocolVersion,
  // UUID destinationDefId,
  // Version destinationProtocolVersion) {}

  private final StandardSyncRepository standardSyncRepository;

  public StandardSyncPersistence(final StandardSyncRepository standardSyncRepository) {
    this.standardSyncRepository = standardSyncRepository;

  }

  // public StandardSync getStandardSync(final UUID connectionId) throws IOException,
  // ConfigNotFoundException {
  // return toStandardSync(standardSyncRepository.findById(connectionId));
  // }

  public List<StandardSync> getStandardSyncs() {
    Iterable<StandardSyncModel> syncModels = standardSyncRepository.findAll();
    List<StandardSync> list = new ArrayList<>();
    for (StandardSyncModel model : syncModels) {
      StandardSync standardSync = toStandardSync(model);
      list.add(standardSync);
    }
    return list;
  }

  private StandardSync toStandardSync(StandardSyncModel model) {
    return new StandardSync().withConnectionId(model.connection_id());
  }

  // public static StandardSync toStandardSync(StandardSyncModel standardSyncModel) {
  // return new StandardSync();
  // }
  //
  // public StandardSync getStandardSync(final UUID connectionId) throws IOException,
  // ConfigNotFoundException {
  // return toStandardSync(standardSyncRepository.findById(connectionId));
  // }
  //
  // public ConfigWithMetadata<StandardSync> getStandardSyncWithMetadata(final UUID connectionId)
  // throws IOException, ConfigNotFoundException {
  //
  // }
  //
  // public List<StandardSync> listStandardSync() throws IOException {
  // }
  //
  // public void writeStandardSync(final StandardSync standardSync) throws IOException {
  //
  // }
  //
  // /**
  // * Deletes a connection (sync) and all of dependent resources (state and connection_operations).
  // *
  // * @param standardSyncId - id of the sync (a.k.a. connection_id)
  // * @throws IOException - error while accessing db.
  // */
  // public void deleteStandardSync(final UUID standardSyncId) throws IOException {
  //
  // }
  //
  // /**
  // * For the StandardSyncs related to actorDefinitionId, clear the unsupported protocol version flag
  // * if both connectors are now within support range.
  // *
  // * @param actorDefinitionId the actorDefinitionId to query
  // * @param actorType the ActorType of actorDefinitionId
  // * @param supportedRange the supported range of protocol versions
  // */
  // public void clearUnsupportedProtocolVersionFlag(final UUID actorDefinitionId,
  // final ActorType actorType,
  // final AirbyteProtocolVersionRange supportedRange)
  // throws IOException {
  //
  // }
  //
  // public List<StreamDescriptor> getAllStreamsForConnection(final UUID connectionId) throws
  // ConfigNotFoundException, IOException {
  //
  // }
  //
  // private List<ConfigWithMetadata<StandardSync>> listStandardSyncWithMetadata(final Optional<UUID>
  // configId) throws IOException {
  //
  // }
  //
  // private List<UUID> connectionOperationIds(final UUID connectionId) throws IOException {
  //
  // }
  //
  // private void writeStandardSync(final StandardSync standardSync, final DSLContext ctx) {
  // }
  //
  // private Stream<StandardSyncIdsWithProtocolVersions> findDisabledSyncs(final DSLContext ctx, final
  // UUID actorDefId, final ActorType actorType) {
  //
  // }
  //
  // private void clearProtocolVersionFlag(final DSLContext ctx, final List<UUID> standardSyncIds) {
  // }
>>>>>>> 174dfef660234bf673083191ad6da5a57c3d6236

}