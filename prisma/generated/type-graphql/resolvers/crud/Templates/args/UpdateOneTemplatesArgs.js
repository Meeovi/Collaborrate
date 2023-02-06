"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesUpdateInput_1 = require("../../../inputs/TemplatesUpdateInput");
const TemplatesWhereUniqueInput_1 = require("../../../inputs/TemplatesWhereUniqueInput");
let UpdateOneTemplatesArgs = class UpdateOneTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesUpdateInput_1.TemplatesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesUpdateInput_1.TemplatesUpdateInput)
], UpdateOneTemplatesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TemplatesWhereUniqueInput_1.TemplatesWhereUniqueInput)
], UpdateOneTemplatesArgs.prototype, "where", void 0);
UpdateOneTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTemplatesArgs);
exports.UpdateOneTemplatesArgs = UpdateOneTemplatesArgs;
