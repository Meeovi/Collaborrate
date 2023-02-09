"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTemplatesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesWhereInput_1 = require("../../../inputs/TemplatesWhereInput");
let DeleteManyTemplatesArgs = class DeleteManyTemplatesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesWhereInput_1.TemplatesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesWhereInput_1.TemplatesWhereInput)
], DeleteManyTemplatesArgs.prototype, "where", void 0);
DeleteManyTemplatesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTemplatesArgs);
exports.DeleteManyTemplatesArgs = DeleteManyTemplatesArgs;
