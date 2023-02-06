"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerWhereInput_1 = require("../../../inputs/MediamanagerWhereInput");
let DeleteManyMediamanagerArgs = class DeleteManyMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereInput_1.MediamanagerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereInput_1.MediamanagerWhereInput)
], DeleteManyMediamanagerArgs.prototype, "where", void 0);
DeleteManyMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMediamanagerArgs);
exports.DeleteManyMediamanagerArgs = DeleteManyMediamanagerArgs;
