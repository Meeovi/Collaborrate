"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateInput_1 = require("../../../inputs/PagesCreateInput");
const PagesUpdateInput_1 = require("../../../inputs/PagesUpdateInput");
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
let UpsertPagesArgs = class UpsertPagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], UpsertPagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCreateInput_1.PagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesCreateInput_1.PagesCreateInput)
], UpsertPagesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateInput_1.PagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateInput_1.PagesUpdateInput)
], UpsertPagesArgs.prototype, "update", void 0);
UpsertPagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPagesArgs);
exports.UpsertPagesArgs = UpsertPagesArgs;
