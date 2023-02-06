"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesWhereUniqueInput_1 = require("../../../inputs/TemplatesWhereUniqueInput");
let FindUniqueTemplatesArgs = class FindUniqueTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput)
], FindUniqueTemplatesArgs.prototype, "where", void 0);
FindUniqueTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTemplatesArgs);
exports.FindUniqueTemplatesArgs = FindUniqueTemplatesArgs;
