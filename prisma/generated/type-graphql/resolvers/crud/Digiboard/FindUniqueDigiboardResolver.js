"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDigiboardResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueDigiboardArgs_1 = require("./args/FindUniqueDigiboardArgs");
const Digiboard_1 = require("../../../models/Digiboard");
const helpers_1 = require("../../../helpers");
let FindUniqueDigiboardResolver = class FindUniqueDigiboardResolver {
    async digiboard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).digiboard.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Digiboard_1.Digiboard, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDigiboardArgs_1.FindUniqueDigiboardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDigiboardResolver.prototype, "digiboard", null);
FindUniqueDigiboardResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Digiboard_1.Digiboard)
], FindUniqueDigiboardResolver);
exports.FindUniqueDigiboardResolver = FindUniqueDigiboardResolver;
