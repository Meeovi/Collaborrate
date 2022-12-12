"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDeepdiveResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueDeepdiveArgs_1 = require("./args/FindUniqueDeepdiveArgs");
const Deepdive_1 = require("../../../models/Deepdive");
const helpers_1 = require("../../../helpers");
let FindUniqueDeepdiveResolver = class FindUniqueDeepdiveResolver {
    async deepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDeepdiveArgs_1.FindUniqueDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDeepdiveResolver.prototype, "deepdive", null);
FindUniqueDeepdiveResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], FindUniqueDeepdiveResolver);
exports.FindUniqueDeepdiveResolver = FindUniqueDeepdiveResolver;
