"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertApitokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertApitokenArgs_1 = require("./args/UpsertApitokenArgs");
const Apitoken_1 = require("../../../models/Apitoken");
const helpers_1 = require("../../../helpers");
let UpsertApitokenResolver = class UpsertApitokenResolver {
    async upsertApitoken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).apitoken.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Apitoken_1.Apitoken, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertApitokenArgs_1.UpsertApitokenArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertApitokenResolver.prototype, "upsertApitoken", null);
UpsertApitokenResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Apitoken_1.Apitoken)
], UpsertApitokenResolver);
exports.UpsertApitokenResolver = UpsertApitokenResolver;
