"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerUpdateInput_1 = require("../../../inputs/MediamanagerUpdateInput");
const MediamanagerWhereUniqueInput_1 = require("../../../inputs/MediamanagerWhereUniqueInput");
let UpdateOneMediamanagerArgs = class UpdateOneMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerUpdateInput_1.MediamanagerUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerUpdateInput_1.MediamanagerUpdateInput)
], UpdateOneMediamanagerArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput)
], UpdateOneMediamanagerArgs.prototype, "where", void 0);
UpdateOneMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneMediamanagerArgs);
exports.UpdateOneMediamanagerArgs = UpdateOneMediamanagerArgs;
