"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueOotoArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OotoWhereUniqueInput_1 = require("../../../inputs/OotoWhereUniqueInput");
let FindUniqueOotoArgs = class FindUniqueOotoArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OotoWhereUniqueInput_1.OotoWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OotoWhereUniqueInput_1.OotoWhereUniqueInput)
], FindUniqueOotoArgs.prototype, "where", void 0);
FindUniqueOotoArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueOotoArgs);
exports.FindUniqueOotoArgs = FindUniqueOotoArgs;
