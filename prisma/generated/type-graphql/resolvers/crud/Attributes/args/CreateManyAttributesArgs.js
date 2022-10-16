"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAttributesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesCreateManyInput_1 = require("../../../inputs/AttributesCreateManyInput");
let CreateManyAttributesArgs = class CreateManyAttributesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AttributesCreateManyInput_1.AttributesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAttributesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAttributesArgs.prototype, "skipDuplicates", void 0);
CreateManyAttributesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAttributesArgs);
exports.CreateManyAttributesArgs = CreateManyAttributesArgs;
