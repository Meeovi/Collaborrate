"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDeepdiveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneDeepdiveArgs_1 = require("./args/UpsertOneDeepdiveArgs");
const Deepdive_1 = require("../../../models/Deepdive");
const helpers_1 = require("../../../helpers");
let UpsertOneDeepdiveResolver = class UpsertOneDeepdiveResolver {
    async upsertOneDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Deepdive_1.Deepdive, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDeepdiveArgs_1.UpsertOneDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDeepdiveResolver.prototype, "upsertOneDeepdive", null);
UpsertOneDeepdiveResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], UpsertOneDeepdiveResolver);
exports.UpsertOneDeepdiveResolver = UpsertOneDeepdiveResolver;
