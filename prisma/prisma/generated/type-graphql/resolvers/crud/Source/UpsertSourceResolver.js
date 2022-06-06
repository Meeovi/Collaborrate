"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertSourceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertSourceArgs_1 = require("./args/UpsertSourceArgs");
const Source_1 = require("../../../models/Source");
const helpers_1 = require("../../../helpers");
let UpsertSourceResolver = class UpsertSourceResolver {
    async upsertSource(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Source_1.Source, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSourceArgs_1.UpsertSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertSourceResolver.prototype, "upsertSource", null);
UpsertSourceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Source_1.Source)
], UpsertSourceResolver);
exports.UpsertSourceResolver = UpsertSourceResolver;
