"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let DeleteOotoArgs = class DeleteOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], DeleteOotoArgs.prototype, "where", void 0);
DeleteOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOotoArgs);
exports.DeleteOotoArgs = DeleteOotoArgs;
