"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneChecklistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneChecklistArgs_1 = require("./args/UpsertOneChecklistArgs");
const Checklist_1 = require("../../../models/Checklist");
const helpers_1 = require("../../../helpers");
let UpsertOneChecklistResolver = class UpsertOneChecklistResolver {
    async upsertOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneChecklistArgs_1.UpsertOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneChecklistResolver.prototype, "upsertOneChecklist", null);
UpsertOneChecklistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], UpsertOneChecklistResolver);
exports.UpsertOneChecklistResolver = UpsertOneChecklistResolver;
