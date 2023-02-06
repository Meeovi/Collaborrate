"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsCreateManyInput_1 = require("../../../inputs/BrandsCreateManyInput");
let CreateManyBrandsArgs = class CreateManyBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsCreateManyInput_1.BrandsCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBrandsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyBrandsArgs.prototype, "skipDuplicates", void 0);
CreateManyBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBrandsArgs);
exports.CreateManyBrandsArgs = CreateManyBrandsArgs;
