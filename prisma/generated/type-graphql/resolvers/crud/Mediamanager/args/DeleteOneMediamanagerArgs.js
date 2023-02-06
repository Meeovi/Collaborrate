"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneMediamanagerArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerWhereUniqueInput_1 = require("../../../inputs/MediamanagerWhereUniqueInput");
let DeleteOneMediamanagerArgs = class DeleteOneMediamanagerArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MediamanagerWhereUniqueInput_1.MediamanagerWhereUniqueInput)
], DeleteOneMediamanagerArgs.prototype, "where", void 0);
DeleteOneMediamanagerArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneMediamanagerArgs);
exports.DeleteOneMediamanagerArgs = DeleteOneMediamanagerArgs;
