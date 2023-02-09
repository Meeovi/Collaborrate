"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerUpdateManyMutationInput_1 = require("../../../inputs/MediamanagerUpdateManyMutationInput");
const MediamanagerWhereInput_1 = require("../../../inputs/MediamanagerWhereInput");
let UpdateManyMediamanagerArgs = class UpdateManyMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerUpdateManyMutationInput_1.MediamanagerUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerUpdateManyMutationInput_1.MediamanagerUpdateManyMutationInput)
], UpdateManyMediamanagerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereInput_1.MediamanagerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereInput_1.MediamanagerWhereInput)
], UpdateManyMediamanagerArgs.prototype, "where", void 0);
UpdateManyMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMediamanagerArgs);
exports.UpdateManyMediamanagerArgs = UpdateManyMediamanagerArgs;
