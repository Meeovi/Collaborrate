"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueSourceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueSourceArgs_1 = require("./args/FindUniqueSourceArgs");
const Source_1 = require("../../../models/Source");
const helpers_1 = require("../../../helpers");
let FindUniqueSourceResolver = class FindUniqueSourceResolver {
    async source(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).source.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Source_1.Source, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSourceArgs_1.FindUniqueSourceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueSourceResolver.prototype, "source", null);
FindUniqueSourceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Source_1.Source)
], FindUniqueSourceResolver);
exports.FindUniqueSourceResolver = FindUniqueSourceResolver;
