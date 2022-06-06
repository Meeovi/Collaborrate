"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let FindUniqueShopsArgs = class FindUniqueShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], FindUniqueShopsArgs.prototype, "where", void 0);
FindUniqueShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueShopsArgs);
exports.FindUniqueShopsArgs = FindUniqueShopsArgs;
