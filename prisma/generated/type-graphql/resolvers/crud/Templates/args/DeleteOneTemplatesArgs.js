"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesWhereUniqueInput_1 = require("../../../inputs/TemplatesWhereUniqueInput");
let DeleteOneTemplatesArgs = class DeleteOneTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput)
], DeleteOneTemplatesArgs.prototype, "where", void 0);
DeleteOneTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTemplatesArgs);
exports.DeleteOneTemplatesArgs = DeleteOneTemplatesArgs;
