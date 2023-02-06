"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsCreateInput_1 = require("../../../inputs/BrandsCreateInput");
let CreateOneBrandsArgs = class CreateOneBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsCreateInput_1.BrandsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsCreateInput_1.BrandsCreateInput)
], CreateOneBrandsArgs.prototype, "data", void 0);
CreateOneBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBrandsArgs);
exports.CreateOneBrandsArgs = CreateOneBrandsArgs;
