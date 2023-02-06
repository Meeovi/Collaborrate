"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOnePagesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesCreateInput_1 = require("../../../inputs/PagesCreateInput");
const PagesUpdateInput_1 = require("../../../inputs/PagesUpdateInput");
const PagesWhereUniqueInput_1 = require("../../../inputs/PagesWhereUniqueInput");
let UpsertOnePagesArgs = class UpsertOnePagesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesWhereUniqueInput_1.PagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesWhereUniqueInput_1.PagesWhereUniqueInput)
], UpsertOnePagesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesCreateInput_1.PagesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesCreateInput_1.PagesCreateInput)
], UpsertOnePagesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesUpdateInput_1.PagesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PagesUpdateInput_1.PagesUpdateInput)
], UpsertOnePagesArgs.prototype, "update", void 0);
UpsertOnePagesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOnePagesArgs);
exports.UpsertOnePagesArgs = UpsertOnePagesArgs;
